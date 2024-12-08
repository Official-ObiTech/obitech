export default function Languages() {
  
  const languages = ["Mobile", "Webflow", "Full-stack", "Backend", "Frontend"];


  return (
    <>
      <div className={"partiner_container"}>
        {languages.map((lang, index) => (
          <div
            key={index}
            className={`partiner_items animation_scrollLeft item${index + 1}`}
          >
            {lang}
          </div>
        ))}
      </div>
    </>
  );
}
