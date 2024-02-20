import { clsx, type ClassValue } from 'clsx';
import { isValidElement, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function extractStringFromReactNode(reactNode: ReactNode): string {
  let string = '';

  switch (true) {
    case typeof reactNode === 'string': {
      string = reactNode;
      break;
    }
    case typeof reactNode === 'number': {
      string = reactNode.toString();
      break;
    }
    case Array.isArray(reactNode): {
      reactNode.forEach((child) => {
        string += extractStringFromReactNode(child);
      });
      break;
    }
    case isValidElement(reactNode): {
      string += extractStringFromReactNode(reactNode.props.children);
      break;
    }
  }

  return string;
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
