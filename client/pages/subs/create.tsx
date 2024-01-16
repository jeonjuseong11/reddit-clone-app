import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import InputGroup from "../../components/InputGroup";

const SubCreate = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<any>({
    name: null,
    title: null,
    description: null,
  });

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const res = await axios.post("/subs", { name, title, description });

      router.push(`/t/${res.data.name}`);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  return (
    <div className="flex flex-col justify-center pt-16">
      <div className="w-10/12 mx-auto md:w-96">
        <h1 className="mb-2 text-lg font-medium">커뮤니티 만들기</h1>
        <hr />
        <form>
          <div className="my-6">
            <p className="font-medium">Name</p>
            <p className="mb-2 text-xs text-gray-400">커뮤니티 이름은 변경할 수 없습니다.</p>
            <InputGroup placeholder="이름" value={name} setValue={setName} error={errors.name} />
          </div>
          <div className="my-6">
            <p className="font-medium">Title</p>
            <p className="mb-2 text-xs text-gray-400">
              주제를 나타냅니다. 언제든지 변경할 수 있습니다.
            </p>
            <InputGroup placeholder="주제" value={title} setValue={setTitle} error={errors.title} />
          </div>
          <div className="my-6">
            <p className="font-medium">Descripttion</p>
            <p className="mb-2 text-xs text-gray-400">해당 커뮤니티에 대한 설명입니다.</p>
            <InputGroup
              placeholder="설명"
              value={description}
              setValue={setDescription}
              error={errors.description}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-1 text-sm font-semibold text-white bg-gray-400 rounded"
              onClick={handleSubmit}
            >
              커뮤니티 만들기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubCreate;