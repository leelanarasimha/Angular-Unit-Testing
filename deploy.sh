#!/bin/bash
# deploy.sh

# Load nvm (Node Version Manager) or set PATH to Node.js and npm if installed manually
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Alternatively, if Node.js and npm are installed in a specific directory, update the PATH
# export PATH=$HOME/path/to/node/bin:$PATH

# Navigate to your project directory (if necessary)
cd /home2/leelaweb/repositories/Angular-Unit-Testing

# Run npm commands
npm install
npm run build
