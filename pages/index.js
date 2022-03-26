import { Sidebar } from "./Components/Sidebar";

export default function Home() {
  return (
    <>
    <div className="sidebar">
      <p>検索</p>
      <form>
        <input type="search" placeholder="キーワードを入力" />
      </form>
      <p>ステータス</p>
      <Sidebar />
      <p>タグ</p>
      </div>
    </>
  );
}
