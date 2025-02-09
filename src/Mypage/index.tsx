import { useState } from "react";

export default function Mypage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "ユーザー名",
    gender: "男性",
    birthdate: "1990-01-01",
    height: "170cm",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">マイページ</h1>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
                </svg>
              </div>

              {/* ユーザー名 */}
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="mt-4 text-xl font-semibold text-center border rounded px-2 py-1"
                />
              ) : (
                <h2 className="mt-4 text-xl font-semibold">{userData.username}</h2>
              )}

              {/* プロフィール詳細情報 */}
              <ul className="mt-4 text-gray-600 space-y-2 text-sm w-full text-center">
                <li>
                  <strong>性別:</strong>{" "}
                  {isEditing ? (
                    <select
                      name="gender"
                      value={userData.gender}
                      onChange={handleChange}
                      className="border rounded px-2 py-1"
                    >
                      <option value="男性">男性</option>
                      <option value="女性">女性</option>
                      <option value="その他">その他</option>
                    </select>
                  ) : (
                    userData.gender
                  )}
                </li>
                <li>
                  <strong>生年月日:</strong>{" "}
                  {isEditing ? (
                    <input
                      type="date"
                      name="birthdate"
                      value={userData.birthdate}
                      onChange={handleChange}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    userData.birthdate
                  )}
                </li>
                <li>
                  <strong>身長:</strong>{" "}
                  {isEditing ? (
                    <input
                      type="text"
                      name="height"
                      value={userData.height}
                      onChange={handleChange}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    userData.height
                  )}
                </li>
              </ul>

              {/* 編集ボタン & 保存ボタン */}
              <button
                className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "保存" : "プロフィール編集"}
              </button>
            </div>

            {/* ログアウトボタン */}
            <button className="mt-8 w-full flex items-center justify-center space-x-2 text-red-600 hover:bg-red-50 p-2 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>ログアウト</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
