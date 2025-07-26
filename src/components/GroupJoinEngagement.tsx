import React from "react";
import Image from "next/image";

interface Items {
  id: string;
  title: string;
  title_color: string;
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  thumbnail: string;
  top_left_icon_img: string;
}

interface GroupEngagementProps {
  groupEngagementItems?: Items[];
}

const GroupJoinEngagement = ({
  groupEngagementItems,
}: GroupEngagementProps) => {
  if (!groupEngagementItems || groupEngagementItems.length === 0) return null;

  return (
    <section className="px-4 py-8">
      {groupEngagementItems.map((item) => (
        <div
          key={item.id}
          className="rounded-xl overflow-hidden flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 p-6"
          style={{
            backgroundImage: `url(${item.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left Side Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={item.top_left_icon_img}
                alt="Icon"
                width={0}
                height={0}
                sizes="auto"
                className="h-8 w-auto"
              />
            </div>
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: item.title_color }}
            >
              {item.title}
            </h2>
            <p className="mb-4" style={{ color: item.description_color }}>
              {item.description}
            </p>
            <a
              href={item.cta.clicked_url}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition"
              style={{ backgroundColor: item.cta.color || undefined }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.cta.text}
            </a>
          </div>

          {/* Right Side Thumbnail */}
          <div className="flex-shrink-0">
            <Image
              src={item.thumbnail}
              alt="Thumbnail"
              width={300}
              height={200}
              className="rounded"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default GroupJoinEngagement;
