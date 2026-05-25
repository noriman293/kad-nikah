export default function Footer() {
  console.log("Footer rendered");
  return (
    <div className="w-full relative z-10">
      <hr className="border-t border-gray-200 my-4 max-w-xs mx-auto opacity-50" />
      <footer aria-label="Footer wedding invitation" className="text-center py-4 text-sm text-gray-500 font-serif tracking-wide">
        <p>© 2026 Shafika & Iman #ForeverIman</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] md:text-xs text-muted-foreground/60 font-sans mt-2">
          <span>#ImanAndPika4ever</span>
          <span>#ImanMeetsPika</span>
          <span>#ImanAndPikaInLove</span>
          <span>#imaNeeDShafika</span>
        </div>
      </footer>
    </div>
  );
}
