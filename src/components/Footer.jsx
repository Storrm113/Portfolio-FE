export default function Footer() {
    return (
      <footer className="bg-[#fef3c7] dark:bg-black text-blue-800 dark:text-red-400 py-4 text-center transition-colors duration-300">
        <p className="text-sm font-medium">© {new Date().getFullYear()} Fenrir Studios, LLC. All rights reserved.</p>
      </footer>
    );
  }
  