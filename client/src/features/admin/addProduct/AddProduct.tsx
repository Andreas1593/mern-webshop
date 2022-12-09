import axios from 'axios';
import { FormData } from 'formdata-node';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { IFormData } from '../../../models';

const AddProduct = () => {
  const [form, setForm] = useState<IFormData>({
    name: '',
    brand: '',
    category: '',
    description: '',
    price: '',
    images: [],
    hightlight: false,
  });

  const navigate = useNavigate();

  const updateForm = (value: { [key: string]: any }) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let newProduct = new FormData();

    for (const [key, value] of Object.entries(form)) {
      if (key === 'images' && value !== undefined) {
        for (let i = 0; i < value.length; i++) {
          newProduct.append(key, value[i]);
        }
      } else {
        newProduct.append(key, value);
      }
    }

    axios
      .post('http://localhost:5000/admin/product/add', newProduct, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'de;q=0.9, en-US,en;q=0.8',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate('/admin/product');
          toast.success('New Product added successfully');
        }
      })
      .catch((err) => {
        if (err.response.status === 415) {
          toast.error('Only images are allowed (PNG, JPG, JPEG, GIF)', {
            className: 'font-medium bg-red-100',
          });
        } else {
          toast.error('Unknown error', {
            className: 'font-medium bg-red-100',
          });
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:items-center gap-6 mb-6">
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full md:w-80 bg-rose-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required={true}
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          ></input>
        </div>
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            className="w-full md:w-80 bg-rose-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            required={true}
            value={form.brand}
            onChange={(e) => updateForm({ brand: e.target.value })}
          ></input>
        </div>
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <select
            className="w-full md:w-80 bg-rose-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            name="name"
            required={true}
            defaultValue={''}
            onChange={(e) => updateForm({ category: e.target.value })}
          >
            <option value="" disabled>
              - Select a category -
            </option>
            <option value="necklaces">Necklaces</option>
            <option value="rings">Rings</option>
            <option value="earrings">Earrings</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            className="w-full md:w-80 bg-rose-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            name="description"
            required={true}
            rows={8}
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          ></textarea>
        </div>
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="text"
            className="w-full md:w-80 bg-rose-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            pattern="[0-9]{1,5}(\.[0-9]{1,2})?"
            title="Price without dollar sign, e.g. 19.99"
            required={true}
            value={form.price}
            onChange={(e) => updateForm({ price: e.target.value })}
          ></input>
        </div>
        <div className="inline">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Images
          </label>
          <input
            className="form-control block w-full md:w-80 py-1.5 px-3 text-base font-normal text-gray-700 bg-rose-50 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="images"
            type="file"
            multiple
            onChange={(e) => updateForm({ images: e.target.files })}
          />
        </div>
        <div className="flex gap-2 w-full md:w-80">
          <input
            type="submit"
            value="Submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          />
          <Link
            to="/admin/product"
            className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
