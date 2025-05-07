import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  company: "",
  name: "",
  street: "",
  zip: "",
  city: "",
  phone: "",
  email: "",
  location: "",
  purpose: "",
  depth: "",
  usage: "",
  engineeringInvolved: "",
  engineeringOffice: "",
  budget: "",
  currency: "GEL",
  notes: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCheckbox = (e) => {
  //   const { value, checked } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     purpose: checked
  //       ? [...prev.purpose, value]
  //       : prev.purpose.filter((item) => item !== value),
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact/send`, formData);
      setStatus("success");
      setFormData(initialState);
      setTimeout(() => navigate("/thank-you"), 3000);
    } catch (err) {
      setStatus(err);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10 md:grid md:grid-cols-2">
      
      {/* Status Banner */}
      {status === "success" && (
        <div className="col-span-2 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded shadow animate-fade-in text-sm sm:text-base">
          ✅ Your message has been sent! Redirecting...
        </div>
      )}
      {status === "error" && (
        <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded shadow animate-fade-in text-sm sm:text-base">
          ❌ Something went wrong. Please try again.
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-700">გამოგვიგზავნეთ მოთხოვნის ფორმა</h2>

        <input name="company" value={formData.company} onChange={handleChange} placeholder="კომპანიის დასახელება" className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="name" value={formData.name} onChange={handleChange} required placeholder="სახელი და გვარი" className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="street" value={formData.street} onChange={handleChange} placeholder="მისამართი" className="w-full border p-2 rounded text-sm sm:text-base" />
        <div className="flex flex-col sm:flex-row gap-2">
          <input name="zip" value={formData.zip} onChange={handleChange} placeholder="ზიპ კოდი" className="w-full sm:w-1/3 border p-2 rounded text-sm sm:text-base" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder="ქალაქი" className="w-full sm:w-2/3 border p-2 rounded text-sm sm:text-base" />
        </div>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="ტელეფონი" className="w-full border p-2 rounded text-sm sm:text-base" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full border p-2 rounded text-sm sm:text-base" />
        <textarea name="location" value={formData.location} onChange={handleChange} placeholder="ობიექტის ადგილმდებარეობა" className="w-full border p-2 rounded text-sm sm:text-base" />

        <fieldset>
  <legend className="font-semibold mb-2">ჭაბურღილის მიზნობრიობა:</legend>
  {["პირადი მოხმარების", "სოფლის მეურნეობა", "წარმოება", "სხვა"].map((type) => (
    <label key={type} className="block text-sm sm:text-base">
      <input
        type="radio"
        name="purpose"
        value={type}
        checked={formData.purpose === type}
        onChange={handleChange}
        className="mr-2"
      />
      {type}
    </label>
  ))}
</fieldset>

        <input name="depth" value={formData.depth} onChange={handleChange} placeholder="ჭაბურღილის სავარაუდო სიღრმე(მეტრი)" className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="usage" value={formData.usage} onChange={handleChange} placeholder="წყლის სასურველი რაოდენობა(ლიტრი)" className="w-full border p-2 rounded text-sm sm:text-base" />

        <fieldset>
          <legend className="font-semibold mb-2">გაქვთ ჰიდროგეოლოგიური დასკვნა?</legend>
          <label className="mr-4 text-sm sm:text-base">
            <input
              type="radio"
              name="engineeringInvolved"
              value="yes"
              checked={formData.engineeringInvolved === "yes"}
              onChange={handleChange}
              className="mr-2"
            />
            კი
          </label>
          <label className="text-sm sm:text-base">
            <input
              type="radio"
              name="engineeringInvolved"
              value="no"
              checked={formData.engineeringInvolved === "no"}
              onChange={handleChange}
              className="mr-2"
            />
            არა
          </label>
          <br/>
          {formData.engineeringInvolved === "yes" && (
           
            <input
              type="text"
              name="engineeringOffice"
              value={formData.engineeringOffice}
              onChange={handleChange}
              placeholder="ვისი დასკვნა გაქვთ?"
              className="w-full border p-2 mt-2 rounded text-sm sm:text-base"
            />
          )}
        </fieldset>

        <div>
          <label className="block font-semibold mb-1">დაგეგმილი ბიუჯეტი</label>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="თანხა"
              className="w-full border p-2 rounded text-sm sm:text-base"
            />
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="border p-2 rounded text-sm sm:text-base"
            >
              <option value="GEL">₾ </option>
              <option value="USD">$ </option>
            </select>
          </div>
        </div>

        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="დამატებითი ინფორმაცია" className="w-full border p-2 rounded text-sm sm:text-base" rows="5" />

        <button type="გაგზავნა" className="w-full sm:w-auto bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded shadow text-sm sm:text-base">
          გაგზავნა
        </button>
      </form>

      {/* Company Info */}
      <div className="bg-sky-50 p-4 sm:p-6 rounded shadow h-fit text-sm sm:text-base">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800 mb-4">საკონტაქტო ინფორმაცია</h2>
        <p className="mb-2"><strong>შპს ველიქსი</strong></p>
        <p className="mb-1">📍 ამირეჯიბის ქ. 30, თელავი, საქართველო</p>
        <p className="mb-1">✉️ <a href="mailto:info@wellix.ge" className="text-sky-700 hover:underline">info@wellix.ge</a></p>
        <p className="mb-1">📞 +995 598 307 308</p>
        <p className="mt-4 text-gray-600">
      
        </p>
      </div>
    </div>
  );
};

export default Contact;
