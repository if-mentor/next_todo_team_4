import Link from "next/link";
import React from "react";

function top() {
  return (
    <div>
      <div>
        進行中のタスクが２件、未着手のタスクが３件、完了済みのタスクが２件あります
      </div>
      <button>
        <Link href="#">+新規タスク</Link>
      </button>

      <div className="title">
        <h2>進行中</h2>
        <div className="doingTask">静的サイトのホスティング</div>
        <button></button>
        <div className="doingTask">react.jsでtodoアプリ作成</div>
        <div className="doingTask3">todoサイトのUI作成</div>
      </div>

      <div className="title">
        <h2>未着手</h2>
        <div className="unStartedTask">静的サイトのホスティング</div>
        <div className="unStartedTask">react.jsでtodoアプリ作成</div>
      </div>

      <div className="title">
        <h2>完了済み</h2>
        <div className="doneTask">静的サイトのホスティング</div>
        <div className="doneTask">react.jsでtodoアプリ作成</div>
      </div>
    </div>
  );
}

export default top;
