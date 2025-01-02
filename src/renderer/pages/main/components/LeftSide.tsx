import { Calendar } from "@/renderer/components/ui/calendar";

export default function LeftSide() {
  return (
    <div className="flex flex-col">
      <div className="relative py-5">
        <Calendar numberOfMonths={1} pagedNavigation />
      </div>
    </div>
  )
}