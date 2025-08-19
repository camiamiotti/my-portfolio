export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-100 py-6 mt-12 text-center text-gray-500 text-sm font-title">
      <span className="text-1xl">☺</span> {year} Camila Amiotti.
    </footer>
  );
}
