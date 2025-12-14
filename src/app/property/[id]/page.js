import data from "../../../../data/propertiy.json";

export default function PropertyDetails({ params }) {
  const { id } = params;

  const property = data.properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return <div className="p-10 text-red-500">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-10 text-black">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.address}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">
        $ {property.price.toLocaleString()}
      </p>

      <div className="flex gap-6 mb-6 text-lg">
        <span>🛏 {property.bedroom} Beds</span>
        <span>🛁 {property.bathroom} Baths</span>
        <span>📐 {property.area}</span>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Description</h2>
      <p className="text-gray-700 mb-6">{property.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {property.amenities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
