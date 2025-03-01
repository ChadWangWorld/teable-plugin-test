import { useState, useEffect } from 'react';
import { usePluginBridge } from '@teable/sdk';

export default function PrivateChatBroadcast() {
  const bridge = usePluginBridge();
  const [selection, setSelection] = useState<unknown | null>(null);
  useEffect(() => {
    const listener = (data: unknown) => {
      setSelection(data);
    };
    bridge?.on('syncSelection', listener);
    return () => {
      bridge?.removeListener('syncSelection', listener);
    };
  }, [bridge]);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h5>当前选择</h5>
        <p>{selection ? JSON.stringify(selection) : '无选择数据'}</p>
      </div>
    </div>
  );
}