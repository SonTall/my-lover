import imagePath from "../../assets/images/demo.jpg";

export default function Category({ category }) {
  console.log(category);
  return (
    <div>
      <div className="header-title">{category.title}</div>
      <div className="d-flex justify-content-center">
        {category.imgs.map((image, key) => (
          <div>
            {/* <img src={image.content} alt={"logo"} /> */}
            <img src={imagePath} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
