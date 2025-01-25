import MainButton from "@/components/atoms/Button";
import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <NavBar />
        <MainButton ariaLabel="Hello World" size="large" variant="white">
          Hello World
        </MainButton>
      </main>
      <footer></footer>
    </div>
  );
}
