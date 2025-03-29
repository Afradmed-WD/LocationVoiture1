<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">


    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-600 text-white">
    <div class="">
        <div class="flex justify-between items-center py-2 mx-10 mt-[-20px]">
            <div class="">
                <img src="Images/log.png" alt="" class="h-[100px] w-[100px]  ">
            </div>
            <div class="flex justify-center mt-[-35px] ml-15">
                <div class="fixed z-20 text-black font-semibold bg-cyan-300 p-3 px-20  rounded-br-3xl rounded-bl-3xl  mt-[-20px]">
                    <ul class="flex gap-4 font-serif text-md">
                        <li>Home</li>
                        <li>services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div>
                @if (Route::has('login'))
                    <nav class="flex gap-4">
                        @auth
                            <a href="{{ url('/list') }}" 
                               class="inline-block px-5 py-1.5 text-[#EDEDEC] border border-cyan-400 hover:border-[#62605b] rounded-bl-xl rounded-tr-xl  text-sm">
                                Dashboard
                            </a>
                        @else
                            <a href="{{ route('login') }}" 
                               class=" px-4 py-1.5  flex  items-center space-x-2 border border-red-500 rounded-tr-2xl rounded-bl-2xl text-black  text-sm">
                               <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.5C6 3.22386 6.22386 3 6.5 3L14.5 3C14.7761 3 15 3.22386 15 3.5V12.5C15 12.7761 14.7761 13 14.5 13H6.5C6.22386 13 6 12.7761 6 12.5V10.5C6 10.2239 5.77614 10 5.5 10C5.22386 10 5 10.2239 5 10.5V12.5C5 13.3284 5.67157 14 6.5 14H14.5C15.3284 14 16 13.3284 16 12.5V3.5C16 2.67157 15.3284 2 14.5 2L6.5 2C5.67157 2 5 2.67157 5 3.5V5.5C5 5.77614 5.22386 6 5.5 6C5.77614 6 6 5.77614 6 5.5V3.5Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8536 8.35355C12.0488 8.15829 12.0488 7.84171 11.8536 7.64645L8.85355 4.64645C8.65829 4.45118 8.34171 4.45118 8.14645 4.64645C7.95118 4.84171 7.95118 5.15829 8.14645 5.35355L10.2929 7.5L1.5 7.5C1.22386 7.5 1 7.72386 1 8C1 8.27614 1.22386 8.5 1.5 8.5H10.2929L8.14645 10.6464C7.95118 10.8417 7.95118 11.1583 8.14645 11.3536C8.34171 11.5488 8.65829 11.5488 8.85355 11.3536L11.8536 8.35355Z" fill="white"/>
                                </svg>
                                </span> 
                               &nbsp; Log in
                            </a>
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}" 
                                   class="inline-block px-5 py-1.5 text-black font-semibold  border-[#3E3E3A] bg-red-600 hover:border-transparent rounded-br-2xl rounded-tl-2xl  text-sm">
                                    Register
                                </a>
                            @endif
                        @endauth
                    </nav>
                @endif
            </div>
        </div>
      
    </div>
</body>
</html>
