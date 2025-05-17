import { BsShift } from 'react-icons/bs';
import { Ruby } from '../Ruby';

export function ShiftKey() {
  return (
    <Ruby caption="shift">
      <kbd className="kbd">
        <BsShift className="text-sm" />
      </kbd>
    </Ruby>
  );
}
