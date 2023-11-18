<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role;
use App\Models\register;
use Barryvdh\DomPDF\PDF as DomPDFPDF;
use DB;
use Dompdf\Adapter\PDFLib;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB as FacadesDB;
use Illuminate\Support\Facades\Mail;


use Validator;
use PDF;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user=FacadesDB::table('users')->join('roles','roles.id','=','users.id_role')->get();
        return response()->json($user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fname=$request->get('user_firstname');
        $lname=$request->get('user_lastname');
        $login=$request->get('login');
        $password=$request->get('password');
        $role=$request->get('id_role');

        $data = User::where('login', $login)->first();
        if($data)
        {
            return response()->json(['status' => 'present', 'email' => $login]);
        }

        $user = User::create([
            'user_firstname'=>$fname,
            'user_lastname'=>$lname,
            'login'=>$login,
            'password'=>bcrypt($password),
            'id_role'=>$role,
        ]);

        $token = $user->createToken('MyAuthApp')->plainTextToken;

        $pdfFileName = "details" . '_mailname.pdf';

        try {
            $pdf = PDF::loadView('pdf_template', [
                'user_firstname' => $fname,
                'user_lastname' => $lname,
                'login' => $login,
                'password' => $password,
                'id_role' => $role
            ]);

            $pdf->save(storage_path('app/' . $pdfFileName));

            if (file_exists(storage_path('app/' . $pdfFileName))) {


                Mail::send('mailsending', ['user_firstname' => $fname], function ($message) use ($login, $pdfFileName) {
                    $message->to($login);
                    $message->subject("Congratulations🎉 Your Registration Completed");
                    $message->attach(storage_path('app/' . $pdfFileName), [
                        'as' => $pdfFileName,
                        'mime' => 'application/pdf',
                    ]);
                });

                // After sending the mail, remove the PDF
                unlink(storage_path('app/' . $pdfFileName));

                return response()->json([
                    'status' => 'success',
                    'message' => 'Register Successfully',
                    'token' => $token
                ]);



                return response()->json(['status' => 'success', 'message' => 'PDF generated successfully']);
            } else
            {
                return response()->json(['status' => 'error', 'message' => 'PDF generation failed']);
            }



        } catch (\Exception $e)
        {

            unlink(storage_path('app/' . $pdfFileName)); // Remove the PDF if the mail failed
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred during email sending: ' . $e->getMessage()
            ]);

            // return response()->json(['status' => 'error', 'message' => 'An error occurred: ' . $e->getMessage()]);
        }


            // Mail::send('mailsending', ['user_firstname' => $fname], function ($message) use ($login, $pdfFileName) {
            //     $message->to($login);
            //     $message->subject("Congratulations🎉 Your Registration Completed");

            //     $message->attach(storage_path('app/' . $pdfFileName), [
            //         'as' => $pdfFileName,
            //         'mime' => 'application/pdf',
            //     ]);
            // });

            // unlink(storage_path('app/' . $pdfFileName));

            // return response()->json(['status' => 'success', 'message' => 'Register Successfully', 'token' => $token]);

}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=User::find($id);
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $fname=$request->get('user_firstname');
        $lname=$request->get('user_lastname');
        $login=$request->get('login');
        $password=$request->get('password');
        $role=$request->get('id_role');
        $update=User::find($id);
        $update->user_firstname=$fname;
        $update->user_lastname=$lname;
        $update->login=$login;
        $update->password=$password;
        $update->id_role=$role;
        $update->update();
        echo "data updated";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete=User::find($id);
        $delete->delete();
        echo "record deleted";
    }


    public function login(Request $request)
{
    $User = User::where('login', $request->login)->first();

    if ($User && Hash::check($request->password, $User->password)) {
        $token = $User->createToken($request->login)->plainTextToken;

        $data = User::where('login', $request->login)->select('*')->first();

        return response()->json(['token' => $token, 'msg' => 'Login Success', 'status' => 'success',
         'emailid' => $request->login, 'roleid'=>$data->id_role]);
    }
    return response()->json(['msg' => 'The provided credentials are incorrect', 'status' => 'failed']);
}

    public function logout(Request $request)
    {
        $request->User()->tokens()->delete();

        return response([
            'message' => 'Logout Success',
            'status' => 'success'
        ], 200);
    }

}
