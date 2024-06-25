<template>
    <div class="min-h-screen flex items-center  justify-center bg-gray-500 ">
        <div class="max-w-md w-full mx-auto">
            <div class="bg-customColor shadow p-8">
                <h2 class="text-2xl font-semibold mb-4">Contact Us</h2> 
                <form>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                            required>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                            required>
                    </div>
                    <div class="mb-4">
                        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your Message"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800"
                            required></textarea>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit"
                            class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
<style lang="">
    
</style>