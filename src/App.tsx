import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Main />
      <Footer />  
    </div>
  )
}