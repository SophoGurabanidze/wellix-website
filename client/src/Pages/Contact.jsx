import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact/send`, formData);
      setStatus("success");
      setFormData(initialState);
      setTimeout(() => navigate("/thank-you"), 3000);
    } catch (err) {
      setStatus(`${err}`);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-10 md:grid md:grid-cols-2">
      {status === "success" && (
        <div className="col-span-2 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded shadow animate-fade-in text-sm sm:text-base">
          {t("contact.success")}
        </div>
      )}
      {status === "error" && (
        <div className="col-span-2 bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded shadow animate-fade-in text-sm sm:text-base">
          {t("contact.error")}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-sky-700">{t("contact.formTitle")}</h2>

        <input name="company" value={formData.company} onChange={handleChange} placeholder={t("contact.placeholders.company")} className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="name" value={formData.name} onChange={handleChange} required placeholder={t("contact.placeholders.name")} className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="street" value={formData.street} onChange={handleChange} placeholder={t("contact.placeholders.street")} className="w-full border p-2 rounded text-sm sm:text-base" />
        <div className="flex flex-col sm:flex-row gap-2">
          <input name="zip" value={formData.zip} onChange={handleChange} placeholder={t("contact.placeholders.zip")} className="w-full sm:w-1/3 border p-2 rounded text-sm sm:text-base" />
          <input name="city" value={formData.city} onChange={handleChange} placeholder={t("contact.placeholders.city")} className="w-full sm:w-2/3 border p-2 rounded text-sm sm:text-base" />
        </div>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder={t("contact.placeholders.phone")} className="w-full border p-2 rounded text-sm sm:text-base" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("contact.placeholders.email")} required className="w-full border p-2 rounded text-sm sm:text-base" />
        <textarea name="location" value={formData.location} onChange={handleChange} placeholder={t("contact.placeholders.location")} className="w-full border p-2 rounded text-sm sm:text-base" />

        <fieldset>
          <legend className="font-semibold mb-2">{t("contact.purpose.legend")}</legend>
          {t("contact.purpose.options", { returnObjects: true }).map((type) => (
            <label key={type} className="block text-sm sm:text-base">
              <input type="radio" name="purpose" value={type} checked={formData.purpose === type} onChange={handleChange} className="mr-2" />
              {type}
            </label>
          ))}
        </fieldset>

        <input name="depth" value={formData.depth} onChange={handleChange} placeholder={t("contact.placeholders.depth")} className="w-full border p-2 rounded text-sm sm:text-base" />
        <input name="usage" value={formData.usage} onChange={handleChange} placeholder={t("contact.placeholders.usage")} className="w-full border p-2 rounded text-sm sm:text-base" />

        <fieldset>
          <legend className="font-semibold mb-2">{t("contact.engineering.legend")}</legend>
          <label className="mr-4 text-sm sm:text-base">
            <input type="radio" name="engineeringInvolved" value="yes" checked={formData.engineeringInvolved === "yes"} onChange={handleChange} className="mr-2" />
            {t("contact.engineering.yes")}
          </label>
          <label className="text-sm sm:text-base">
            <input type="radio" name="engineeringInvolved" value="no" checked={formData.engineeringInvolved === "no"} onChange={handleChange} className="mr-2" />
            {t("contact.engineering.no")}
          </label>
          <br />
          {formData.engineeringInvolved === "yes" && (
            <input type="text" name="engineeringOffice" value={formData.engineeringOffice} onChange={handleChange} placeholder={t("contact.placeholders.engineeringOffice")} className="w-full border p-2 mt-2 rounded text-sm sm:text-base" />
          )}
        </fieldset>

        <div>
          <label className="block font-semibold mb-1">{t("contact.budget.label")}</label>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder={t("contact.budget.amount")} className="w-full border p-2 rounded text-sm sm:text-base" />
            <select name="currency" value={formData.currency} onChange={handleChange} className="border p-2 rounded text-sm sm:text-base">
              <option value="GEL">₾ </option>
              <option value="USD">$ </option>
            </select>
          </div>
        </div>

        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder={t("contact.placeholders.notes")} className="w-full border p-2 rounded text-sm sm:text-base" rows="5" />

        <button type="submit" className="w-full sm:w-auto bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded shadow text-sm sm:text-base">
          {t("contact.submit")}
        </button>
      </form>

      <div className="bg-sky-50 p-4 sm:p-6 rounded shadow h-fit text-sm sm:text-base">
        <h2 className="text-lg sm:text-xl font-semibold text-sky-800 mb-4">{t("contact.companyInfo.title")}</h2>
        <p className="mb-2"><strong>{t("contact.companyInfo.company")}</strong></p>
        <p className="mb-1">📍 {t("contact.companyInfo.address")}</p>
        <p className="mb-1">✉️ <a href="mailto:info@wellix.ge" className="text-sky-700 hover:underline">{t("contact.companyInfo.email")}</a></p>
        <p className="mb-1">📞 {t("contact.companyInfo.phone")}</p>
      </div>
    </div>
  );
};

export default Contact;
