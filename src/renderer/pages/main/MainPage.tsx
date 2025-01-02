import { Separator } from "@/renderer/components/ui/separator";
import LeftSide from "@/renderer/pages/main/components/LeftSide";
import RightSide from "@/renderer/pages/main/components/RightSide";


export default function MainPage() {
  return (

    <>
      <LeftSide />

      <Separator orientation="vertical" />

      <RightSide />
    </>
  )
}