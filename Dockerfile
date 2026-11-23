# Etapa 1: Build
FROM node:18.20.8-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Produccion segura
FROM node:18.20.8-alpine
# Crear usuario no-root
RUN addgroup -g 1001 covirnet && \
    adduser -D -u 1001 -G covirnet -s /bin/sh -h /home/covirnet covirnet

WORKDIR /app
# node_modules de produccion (root-owned pero legible por covirnet)
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
# artefactos copiados YA con owner correcto (sin RUN chown -R = -581MB)
COPY --from=builder --chown=covirnet:covirnet /app/.next ./.next
COPY --from=builder --chown=covirnet:covirnet /app/public ./public
COPY --from=builder --chown=covirnet:covirnet /app/next.config.mjs ./next.config.mjs

USER covirnet
EXPOSE 3000
CMD ["npm", "start"]
