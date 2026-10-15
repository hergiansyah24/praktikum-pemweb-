
interface SiteFooterProps {
  namaProduk: string;
}

export default function SiteFooter({
  namaProduk,
}: SiteFooterProps) {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl p-4 text-sm text-gray-600">
        &copy; 2026 {namaProduk}. All rights reserved.
      </div>
    </footer>
  );
}