import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageData = () => {
  const [allContent, setAllContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-content")
      .then((res) => res.json())
      .then((data) => setAllContent(data));
  }, []);

  //delete a content
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Content has been deleted.");
        // setAllContent(data);
      });
  };

  const style = {
    table: `bg-red-900 text-amber-300`,
  };

  return (
    <div className="pl-20 w-screen h-screen overflow-auto">
      <div className="px-4 my-12 ">
        <h2 className="mb-8 text-3xl font-bold">Manage Contents</h2>
        <Table className="md:w-[900px]">
          <Table.Head>
            <Table.HeadCell className={style.table}>No.</Table.HeadCell>
            <Table.HeadCell className={style.table}>Title</Table.HeadCell>
            <Table.HeadCell className={style.table}>Description</Table.HeadCell>
            <Table.HeadCell className={style.table}>Image</Table.HeadCell>
            <Table.HeadCell className={style.table}>
              Edit or Manage
            </Table.HeadCell>
          </Table.Head>
          {allContent.map((item, index) => (
            <Table.Body className="divide-y" key={item._id}>
              <Table.Row className="bg-amber-50 w-full dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-wrap text-pretty font-medium text-gray-950 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-wrap break-all overflow-hidden text-pretty font-medium text-gray-950 dark:text-white">
                  {item.title}
                </Table.Cell>
                <Table.Cell className="whitespace-wrap break-all overflow-hidden text-pretty font-medium text-gray-950 dark:text-white">
                  {item.description}
                </Table.Cell>
                <Table.Cell>
                  <img src={item.image_url} className="w-24" />
                </Table.Cell>
                <Table.Cell className="flex flex-col items-center justify-center mt-10">
                  <Link
                    to={`/admin/dashboard/edit-data/${item._id}`}
                    className="font-medium bg-teal-500 px-4 py-1 mb-1 text-white rounded-sm hover:bg-amber-100 hover:text-black"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-amber-100 hover:text-black"
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageData;
