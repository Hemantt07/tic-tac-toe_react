<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        <style>
            .main {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60vh;
                font-size: 5vh;
            }
        </style>
    </head>
    <body class="font-sans antialiased">
        @include('navigation-menu')
        <div class="main">
            This is a Backend Service
        </div>
    </body>
</html>
