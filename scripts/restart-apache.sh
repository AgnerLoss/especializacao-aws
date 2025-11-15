#!/bin/bash
set -e

echo "Ajustando permissões de /var/www/html..."
chown -R apache:apache /var/www/html
