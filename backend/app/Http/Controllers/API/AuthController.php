<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Validate and create a newly registered user.
     *
     * @param <Request> $request
     */
    public function register(Request $request)
    {
        // Validation for Register
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email'     => 'required|unique:users,email',
            'password' => ['required','required_with:confirm_password','same:confirm_password',Password::min(8)->letters()->mixedCase()->numbers()->symbols()],
            'confirm_password' => 'required',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];

            return response()->json($response, 400);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            $token = $user->createToken('TicTacToe')->plainTextToken;

            $response = [
                'success' => true,
                'message' => 'User created successfully',
                'user' => $user,
                'token' => $token
            ];

            return response()->json($response, 201);
        }
    }

    /**
     * Login the user
     * @param <Request> $request
     */
    function login(Request $request)
    {
        return ($request->all());
        // Validator for Login
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => ['required',Password::min(8)->letters()->mixedCase()->numbers()->symbols()],
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];

            return response()->json($response, 400);
        } else {
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                $user = Auth::user();
                $response = [
                    'success' => true,
                    'message' => 'User login successfully',
                    'user' => $user
                ];

                return response()->json($response, 200);
            } else {
                $response = [
                    'success' => false,
                    'message' => 'Unautorized access | Forgot Password?'
                ];

                return response()->json($response, 401);
            }
        }
    }

}
