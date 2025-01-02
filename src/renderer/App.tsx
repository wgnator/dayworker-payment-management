import './App.css'
import MainPage from '@/renderer/pages/main/MainPage'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/renderer/components/ui/tabs";

function App() {
  return (
    <Tabs defaultValue="detailed-view" className="flex flex-col flex-1 min-h-screen items-center">
      <TabsList className='w-fit'>
        <TabsTrigger value="detailed-view">상세</TabsTrigger>
        <TabsTrigger value="worker-database">근로자 DB</TabsTrigger>
      </TabsList>

      <TabsContent value="detailed-view" className='flex flex-1 w-full h-full'>
        <MainPage />
      </TabsContent>

      <TabsContent value="worker-database">Change your worker-database here.</TabsContent>

    </Tabs>
  )
}

export default App
