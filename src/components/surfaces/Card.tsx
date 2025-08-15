import { ReactNode, ElementType } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export type SimpleCardMedia = {
  component?: ElementType;
  image?: string;
  alt?: string;
};

export type SimpleCardProps = {
  media?: SimpleCardMedia;
  title: string;
  description: string;
  children?: ReactNode;
  actions?: ReactNode;
};

export default function SimpleCard({ media, title, description, children, actions }: SimpleCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 4
      }}
    >
      {media &&
        <CardMedia
          component={media.component ? media.component : "img"}
          height="128"
          image={media.image}
          alt={media.alt}
        />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        {children && (
          <>
            <Divider sx={{ my: 2 }} />
            {children}
          </>
        )}
      </CardContent>
      {actions &&
        <CardActions>
          {actions}
        </CardActions>
      }
    </Card>
  )
}