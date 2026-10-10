
interface SiteFooterProps {
  namaProduk: string;
}

export default function SiteFooter({
  namaProduk,
}: SiteFooterProps) {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl p-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} {namaProduk}
      </div>
    </footer>
  );
}