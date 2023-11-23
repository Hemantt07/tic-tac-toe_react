<nav x-data="{ open: false }" class="bg-white border-b border-gray-100">
    <!-- Authentication -->
    <form method="POST" action="{{ route('logout') }}" x-data>
        @csrf

        <button type="submit">Log Out from here</button>
    </form>
</nav>
