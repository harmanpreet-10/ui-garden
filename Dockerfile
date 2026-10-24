
FROM node:20-alpine AS build

WORKDIR /Kaur_Harmanpreet_ui_garden

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

FROM nginx:alpine

WORKDIR /Kaur_Harmanpreet_ui_garden

COPY --from=build /Kaur_Harmanpreet_ui_garden/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
