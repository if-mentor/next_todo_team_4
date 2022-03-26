import Link from "next/link"

export default function task() {
    const taskName="Github上に静的サイトをホスティングする"
    const taskStatus="進行中"
    const taskStartDate="2021-11-8"
    const taskEndDate="2021-11-8"
    const taskContent="GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。GitHub上に静的サイトをホスティングするタスクの内容がここに入ります。"
    const taskTags=["超重要","開発","React","git"]

    return (
        <>
        <div className="header">
            <h1 style={{color:"gray",marginLeft:"30px"}}>ToDoアプリ(ダミーヘッダー)</h1>
        </div>
        <div className="flex">
            <div className="sidebar">
                <p>ダミーサイドバー</p>
            </div>
            <div className="inner-content" style={{padding:"0 30px"}}>
                <div className="head-container">
                    <div className="page-title">
                        <h2>タスク情報</h2>
                    </div>
                    <div className="edit-button">
                        <button className="btn btn-edit">編集</button>
                    </div>
                </div>
                <div className="informations">
                    <p>タスク名：{taskName}</p>
                    <p>ステータス：{taskStatus}</p>
                    <p>開始日：{taskStartDate} 完了日：{taskEndDate}</p>
                    <p>内容：<br />{taskContent}</p>
                    <p className="tags">
                        タグ：
                        {taskTags.map((tag,index) => {
                            return(
                                <span className="task-tag" style={{marginRight:"10px"}} key={index}>{tag}</span>   
                            )
                        })}
                    </p>
                </div>
                <div className="buttons">
                    <button className="btn btn-delete">削除</button>
                        <Link href="/">
                            <a className="btn btn-back">戻る</a>
                        </Link>
                </div>
            </div>

        </div>
            
        </>
    )
}