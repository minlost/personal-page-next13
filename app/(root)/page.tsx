import Description from "@/components/mainpage/Description"
import PageStyler from "@/components/pageStyler/PageStyler"
import ProgramSwitcher from "@/components/ui/ProgramSwitcher"
import LinksBox from "../../components/ui/LinksBox"

export default function HomePage() {
  return (
    <PageStyler>
      <ProgramSwitcher />
      <Description />

      <LinksBox />
    </PageStyler>
  )
}
