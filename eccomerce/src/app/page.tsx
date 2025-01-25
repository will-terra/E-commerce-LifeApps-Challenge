import MainButton from "@/components/atoms/Button";

export default function Home() {
  return (
    <div>
      <main>
        <MainButton ariaLabel="Hello World" size="large" variant="white">
          Hello World
        </MainButton>
      </main>
      <footer></footer>
    </div>
  );
}
