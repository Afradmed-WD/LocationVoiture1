@extends('layouts.master')
@section('main')
<x-app-layout>
  <div class="">
    <div class="bg-white w-[1000px]  h-[10vh] border border-gray-50 flex justify-between items-center mt-10 rounded-xl">
        <div class="mx-10 flex items-center space-x-2">
            <div>
                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9375 9.75C19.9375 12.4424 17.503 14.625 14.5 14.625C11.497 14.625 9.0625 12.4424 9.0625 9.75C9.0625 7.05761 11.497 4.875 14.5 4.875C17.503 4.875 19.9375 7.05761 19.9375 9.75Z" fill="#F29036"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 5.8203 6.49187 0 14.5 0C22.5081 0 29 5.8203 29 13C29 20.1797 22.5081 26 14.5 26C6.49187 26 0 20.1797 0 13ZM14.5 1.625C7.49289 1.625 1.8125 6.71776 1.8125 13C1.8125 15.6868 2.85153 18.1561 4.589 20.1024C5.87781 18.241 8.70841 16.25 14.5 16.25C20.2916 16.25 23.1222 18.241 24.411 20.1024C26.1485 18.1561 27.1875 15.6868 27.1875 13C27.1875 6.71776 21.5071 1.625 14.5 1.625Z" fill="#F29036"/>
                    </svg>
                    
                    
            </div>
            <div>
                <h2 class="text-xl text-black font-serif mx-4">Profile</h2>
            </div>
        </div>
    </div>
  </div>
    <div class="">
        <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="p-4  sm:p-8 bg-white shadow sm:rounded-xl">
                <div class="w-full">
                    @include('profile.partials.update-profile-information-form')
                </div>
            </div>

            <div class=" sm:p-8 bg-white shadow sm:rounded-xl">
                <div class="w-full">
                    @include('profile.partials.update-password-form')
                </div>
            </div>
            
       
            <div class="flex  justify-center sm:p-8 bg-white shadow sm:rounded-xl">
                <div class="">
                    @include('profile.partials.delete-user-form')
                </div>
            </div>
    </div>

</div>
</x-app-layout>

@endsection