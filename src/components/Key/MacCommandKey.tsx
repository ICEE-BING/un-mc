import { BsCommand } from 'react-icons/bs';
import { Ruby } from '../Ruby';

export function MacCommandKey() {
  return (
    <Ruby caption="command">
      <kbd className="kbd">
        <BsCommand className="text-sm" />
      </kbd>
    </Ruby>
  );
}
