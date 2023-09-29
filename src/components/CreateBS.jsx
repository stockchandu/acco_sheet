import { useState } from "react";

export const CreateBS = () => {
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const handleNext = () => {
    if (count < 1) {
      setCount(count + 1);
    }

    if (count === 1) {
      setShowForm(true);
    }
  };
  const handlePrev = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      {!showForm && (
        <div>
          <div className="flex">
            <div className={count === 0 ? "ml-2  font-bold" : "ml-2"}>
              Step 1
            </div>
            <div className={count === 1 ? "ml-2  font-bold" : "ml-2"}>
              Step 2
            </div>
          </div>
          <div>
            {count === 0 && (
              <input type="text" placeholder="please type n of row" />
            )}
            {count === 1 && (
              <input type="text" placeholder="please company name" />
            )}
          </div>
          <button
            className="border p-1 bg-green-500 text-white rounded-md shadow-lg"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="border p-1 bg-green-500 text-white rounded-md shadow-lg"
            onClick={handleNext}
          >
            {count === 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}

      {showForm && (
        <div>
          Welcome to the Balance sheet
          <button
            onClick={() => {
              setShowForm(false);
              setCount(0);
            }}
          >
            Want to edit ?
          </button>
        </div>
      )}
    </>
  );
};
