import classNames from "classnames";
import styles from "./styles.module.scss";
import { JSX } from "react";
import images from "@/assets";
import { Link } from "react-router";

/**
 * A card component that displays an image, title, and optional description.
 * It is a link to an external source.
 *
 * @param {{ thumbnail: string, title: string, description?: string, link: string, className?: string }} props
 * @returns {JSX.Element}
 */
const Card = ({
  thumbnail,
  title,
  description,
  link,
  className,
}: {
  thumbnail: string;
  title: string;
  description?: string;
  link: string;
  className?: string;
}): JSX.Element => {
  return (
    <Link to={link} className="card-link">
      <article className={classNames(styles.card, className)}>
        <img
          srcSet={thumbnail || images.placeholder.noImage.src}
          src={images.placeholder.noImage.src}
          alt={title || "Image not available"}
          className="thumbnail"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = images.placeholder.noImage.src;
            e.currentTarget.srcset = "";
          }}
        />
        <div className="body">
          <h2 className="title">{title}</h2>
          {description && <p className="description">{description}</p>}
        </div>
      </article>
    </Link>
  );
};

export default Card;
