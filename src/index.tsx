import './mockEnv';
import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

import ReactDOM from 'react-dom/client';

import { Root } from './components/Root';

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
