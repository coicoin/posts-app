import PostPage from "@/pages/PostPage";
import ThemeProvider from "@/shared/lib/theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <PostPage />
    </ThemeProvider>
  );
}

export default App;
