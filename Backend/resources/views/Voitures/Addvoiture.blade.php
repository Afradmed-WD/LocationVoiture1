@extends('layouts.master')
@section('main')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100">
    {{-- <div class="flex ">
        <div class=""> --}}
            {{-- <div class="bg-white mx-10 my-8 h-auto pb-5 text-black border border-gray-50 rounded-xl">
                <div class="h-[170px] justify-center  flex mt-[-35px]">
                 <img src="Images/log.png" alt="h-[50px] flex mt-[-20px]">
                </div>
                <div class="mx-4">
                 <ul class="mx-4 space-y-3 flex-col justify-around">
                     <li class="flex items-center space-x-2">
                         <div class="">
                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="12.7461" cy="12.8154" r="3" stroke="#FAD5B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 <path d="M3.74609 9.31543L4.53302 19.5455C4.65325 21.1085 5.95658 22.3154 7.52419 22.3154H17.968C19.5356 22.3154 20.8389 21.1085 20.9592 19.5455L21.7461 9.31543M3.74609 9.31543L12.1322 2.79294C12.4933 2.51207 12.9989 2.51208 13.36 2.79294L21.7461 9.31543M3.74609 9.31543L1.74609 10.8154M21.7461 9.31543L23.7461 10.8154" stroke="#F29036" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                 </svg>
                                 
                         </div>
                         <div class="">
                             <a href="/list">
                             Daschboard
                             </a>
                         </div>
                     </li>
                     <li class="flex items-center space-x-2">
                         <div class="">
                             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12.8615 5.83364C12.8966 5.71903 12.8484 5.59525 12.7451 5.53496C12.6419 5.47468 12.5109 5.49381 12.429 5.58112L8.31981 9.96393C8.24959 10.0388 8.23043 10.1485 8.27107 10.2429C8.31171 10.3373 8.40437 10.3984 8.50683 10.3984H10.2137L9.28866 13.4164C9.25353 13.531 9.30175 13.6548 9.405 13.715C9.50826 13.7753 9.63928 13.7562 9.72115 13.6689L13.6802 9.28607C13.7504 9.21117 13.7696 9.10154 13.7289 9.00712C13.6883 8.9127 13.5956 8.85156 13.4932 8.85156H11.7863L12.8615 5.83364Z" fill="#F29036"/>
                                 <path d="M6.62584 2.75C5.25074 2.75 4.00795 3.56949 3.46628 4.8334L2.37741 7.37409C2.27402 7.61533 2.08847 7.81211 1.85372 7.92949C1.16792 8.27239 0.678842 8.91272 0.52847 9.66458L0.0667539 11.9732C0.0223599 12.1951 0 12.4209 0 12.6473V13.2152C0 14.3344 0.536705 15.3365 1.375 15.9617V18.5625C1.375 18.9422 1.6828 19.25 2.0625 19.25H4.8125C5.1922 19.25 5.5 18.9422 5.5 18.5625V16.7227C7.27599 16.7887 9.27385 16.8438 11 16.8438C12.7262 16.8438 14.724 16.7887 16.5 16.7227V18.5625C16.5 18.9422 16.8078 19.25 17.1875 19.25H19.9375C20.3172 19.25 20.625 18.9422 20.625 18.5625V15.9617C21.4633 15.3365 22 14.3344 22 13.2152V12.6473C22 12.4209 21.9776 12.1951 21.9332 11.9732L21.4715 9.66458C21.3212 8.91272 20.8321 8.27239 20.1463 7.92949C19.9115 7.81212 19.726 7.61533 19.6226 7.37409L18.5337 4.8334C17.992 3.56949 16.7493 2.75 15.3742 2.75H6.62584ZM4.7301 5.37504C5.05511 4.61669 5.80078 4.125 6.62584 4.125H15.3742C16.1992 4.125 16.9449 4.61669 17.2699 5.37504L18.3588 7.91573C18.5903 8.45589 19.0057 8.89651 19.5314 9.15933C19.8376 9.31247 20.0561 9.59845 20.1232 9.93423L20.5849 12.2428C20.6116 12.376 20.625 12.5115 20.625 12.6473V13.2152C20.625 14.3103 19.7735 15.2066 18.6892 15.2559C16.5511 15.3531 13.4834 15.4688 11 15.4688C8.51658 15.4688 5.4489 15.3531 3.31085 15.2559C2.22648 15.2066 1.375 14.3103 1.375 13.2152V12.6473C1.375 12.5115 1.38842 12.376 1.41505 12.2428L1.87677 9.93424C1.94393 9.59845 2.16235 9.31247 2.46864 9.15933C2.99427 8.89651 3.40974 8.45589 3.64124 7.91573L4.7301 5.37504Z" fill="#F29036"/>
                                 </svg>
                                 
                                 
                                 
                         </div>
                         <div class="">
                             <a href="/listcar">
                                 Voitures
                             </a>
                         </div>
                     </li>
                     
                     
                     
                     
                     
                     <li class="flex items-center space-x-2">
                         <div class="">
                             <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M7.21875 13.125C7.21875 12.7626 7.51256 12.4688 7.875 12.4688H13.125C13.4874 12.4688 13.7812 12.7626 13.7812 13.125C13.7812 13.4874 13.4874 13.7812 13.125 13.7812H7.875C7.51256 13.7812 7.21875 13.4874 7.21875 13.125Z" fill="#F29036"/>
                                 <path d="M10.5 1.3125C12.3122 1.3125 13.7812 2.78157 13.7812 4.59375V5.25H7.21875V4.59375C7.21875 2.78157 8.68782 1.3125 10.5 1.3125ZM15.0938 5.25V4.59375C15.0938 2.05669 13.0371 0 10.5 0C7.96294 0 5.90625 2.05669 5.90625 4.59375V5.25H1.3125V18.375C1.3125 19.8247 2.48775 21 3.9375 21H17.0625C18.5122 21 19.6875 19.8247 19.6875 18.375V5.25H15.0938ZM2.625 6.5625H18.375V18.375C18.375 19.0999 17.7874 19.6875 17.0625 19.6875H3.9375C3.21263 19.6875 2.625 19.0999 2.625 18.375V6.5625Z" fill="#F29036"/>
                                 </svg>
                                 
                                 
                                 
                                 
                         </div>
                         <div class="hidden sm:flex">
                            <a href="/afrad">
                         Commandes
                         </a>
                         </div>
                     </li>
                     <li class="flex items-center space-x-2 pt-70">
                         <div class="">
                             <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 16.4062C7.875 16.7687 8.16881 17.0625 8.53125 17.0625L19.0312 17.0625C19.3937 17.0625 19.6875 16.7687 19.6875 16.4062L19.6875 4.59375C19.6875 4.23131 19.3937 3.9375 19.0312 3.9375L8.53125 3.9375C8.16881 3.9375 7.875 4.23131 7.875 4.59375L7.875 7.21875C7.875 7.58119 7.58119 7.875 7.21875 7.875C6.85631 7.875 6.5625 7.58119 6.5625 7.21875L6.5625 4.59375C6.5625 3.50644 7.44394 2.625 8.53125 2.625L19.0312 2.625C20.1186 2.625 21 3.50644 21 4.59375L21 16.4062C21 17.4936 20.1186 18.375 19.0312 18.375L8.53125 18.375C7.44394 18.375 6.5625 17.4936 6.5625 16.4062L6.5625 13.7812C6.5625 13.4188 6.85631 13.125 7.21875 13.125C7.58119 13.125 7.875 13.4188 7.875 13.7812L7.875 16.4062Z" fill="#F29036"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.192211 10.964C-0.0640706 10.7078 -0.0640706 10.2922 0.192211 10.036L4.12971 6.09846C4.38599 5.84218 4.80151 5.84218 5.05779 6.09846C5.31407 6.35474 5.31407 6.77026 5.05779 7.02654L2.24058 9.84375L13.7812 9.84375C14.1437 9.84375 14.4375 10.1376 14.4375 10.5C14.4375 10.8624 14.1437 11.1562 13.7812 11.1562L2.24058 11.1562L5.05779 13.9735C5.31407 14.2297 5.31407 14.6453 5.05779 14.9015C4.80151 15.1578 4.38599 15.1578 4.12971 14.9015L0.192211 10.964Z" fill="#F29036"/>
                                 </svg>
                                 
                                 
                                 
                                 
                         </div>
                         <form method="POST" action="{{ route('logout') }}">
                             @csrf
 
                             <a href="route('logout')"
                                     onclick="event.preventDefault();
                                                 this.closest('form').submit();">
                                 Log Out
                         </a>
                         </form>
                     </li>
                     
                 </ul>
                </div>
             </div> --}}
        {{-- </div> --}}
        <div class="">
            <div class="bg-white w-[100%] h-[10vh] border border-gray-50 flex justify-between items-center mt-10 rounded-xl">
                <div class="mx-10 flex items-center space-x-2">
                   
                    <div class="">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 9.5C20 14.7467 15.5228 19 10 19C4.47715 19 0 14.7467 0 9.5C0 4.2533 4.47715 0 10 0C15.5228 0 20 4.2533 20 9.5ZM10.625 5.34375C10.625 5.01583 10.3452 4.75 10 4.75C9.65482 4.75 9.375 5.01583 9.375 5.34375V8.90625H5.625C5.27982 8.90625 5 9.17208 5 9.5C5 9.82792 5.27982 10.0938 5.625 10.0938H9.375V13.6562C9.375 13.9842 9.65482 14.25 10 14.25C10.3452 14.25 10.625 13.9842 10.625 13.6562V10.0938H14.375C14.7202 10.0938 15 9.82792 15 9.5C15 9.17208 14.7202 8.90625 14.375 8.90625H10.625V5.34375Z" fill="#F29036"/>
                            </svg>
                            
                    </div>
                    <div class="">
                    <h2 class="text-xl text-black font-serif  mx-4">
                        Ajouter Une Voiture
                    </h2>
                   </div>
                   
                </div>
                </div>
            <form action="" method="POST" class="border border-gray-300 bg-white rounded-xl space-y-6 my-8">
                @csrf
                {{-- <p class="text-center text-2xl font-bold">Ajouter Une Voiture</p> --}}
                <div class="mx-10 flex-col justify-center">
                   <div class="">
                    
                    <label for="">ImageP:
                        <br>
                        <input type="text" name="ImageP" placeholder="Donner URL de L'image Pricipale" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700">
                    </label>
                </div><br>
                    
                <div class="grid grid-cols-3 gap-4">
                    <div class="">
                        <label for="">ImageS1:
                            <br>
                            <input type="text" name="ImageS1" placeholder="donner URL de L'image secondaire 1 " class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                    </div>
                    <div class="">
                        <label for="">ImageS2:
                            <br>
                            <input type="text" name="ImageS2" placeholder="Donner URL de L'image secondaire 2 " class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                    </div>
                    <div class="">
                        <label for="">ImageS3:
                            <br>
                            <input type="text" name="ImageS3" placeholder="Donner URL de L'image secondaire 3 " class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                    </div>
                </div>    
                <br>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="">
                            <label for="">Title:
                                <br>
                                <input type="text" name="title" placeholder="donner le titre de ce Voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                            </label>
                            
                            
                           
                        </div>
                        <div class="">
                            <label for="">Type:
                                <br>
                                <input type="text" name="type" placeholder="donner le type de Voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                            </label>
                        </div>
                        <div class="">
                            <label for="">Prix_Jour:
                                <br>
                                <input type="text" name="prix_jour" placeholder="donner la Prix Par Jour" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                            </label>
                        </div>
                       <div class="">
                        <label for="">Status:
                            <br>
                            <select name="status" id="status" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                                <option selected >Choisisez la Disponibilite</option>
                                @foreach ($data->unique('status') as $item)
        
                                <option value={{$item->status}}>{{$item->status}}</option>
                                @endforeach
        
                            </select>
                        </label>
                    </div>
                        
                    </div>
                    <br>
                   <div class="grid grid-cols-3 gap-4">
                    <div class="">
                        <label for="">Consomation:
                            <br>
                            <input type="text"  name="consomation" placeholder="donner le consommation de voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                        
                    
                    </div>
                    <div class="">
                        <label for="">Category:
                            <br>
                            <input type="text" name="category" placeholder="donnerle categroy ce ce Voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                    </div>
                    <div class="">
                        <label for="">Dor:
                            <br>
                            <input type="text" name="dor" placeholder="Combien de Passengers dans ce Voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700"">
                        </label>
                    </div>
                   </div>
                   <div class="">
                    <label for="">description:
                        <br>
                        <textarea type="text" name="description" placeholder="donner une description Pour ce Voiture" class="border border-gray-700 rounded-xl p-2 w-full mx-20 focus:ring-2 focus:outline-none focus:ring-blue-700""></textarea>
                    </label>
                   </div>
                   <center>
                    <div class="flex justify-center my-3 bg-gradient-to-l from-blue-500 to-purple-500 max-w-sm rounded-xl items-center">
                        <button type="submit" class="p-2 px-4 bg-gradient-to-l from-blue-300 to-purple-300 text-white font-semibold font-serif">Ajouter</button>
                       </div>
                   </center>
                    
                </div>
            </form>
        </div>
    </div>
</body>
</html>
@endsection