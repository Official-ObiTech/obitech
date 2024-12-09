import SkillsCardLg from "../Reusable/SkillsCard/Lg";
import SkillsCardMd from "../Reusable/SkillsCard/Md";
import SkillsCardSm from "../Reusable/SkillsCard/Sm";

export default function Skills() {
  const boxs = Array.from({ length: 9 }, (_, i) => i);

  return (
    <>
      <div className="text-center space-y-6 container mx-auto relative md:px-20 px-4">
        <div className="bg_blur_anime" />
        <h1 className="header">
          My Skills <span>icon</span>
        </h1>

        {/* Lage Screen */}
        <SkillsCardLg className="hidden lg:block " />

        {/* Medium Screen */}
        <SkillsCardMd className="hidden md:block " />

        {/* Small Screen */}
        <SkillsCardSm />

        <div className="grid_box_container">
          {boxs.map((_, index) => (
            <div key={index} className="grid_box_item" />
          ))}
        </div>
      </div>
    </>
  );
}
