declare type SomeRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

declare type Omittable<A, P extends keyof A> = Omit<A, P> & { [B in P]?: A[B] };
