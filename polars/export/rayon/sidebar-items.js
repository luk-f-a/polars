window.SIDEBAR_ITEMS = {"fn":[["current_num_threads","Returns the number of threads in the current registry. If this code is executing within a Rayon thread-pool, then this will be the number of threads for the thread-pool of the current thread. Otherwise, it will be the number of threads for the global thread-pool."],["current_thread_index","If called from a Rayon worker thread, returns the index of that thread within its current pool; if not called from a Rayon thread, returns `None`."],["in_place_scope","Creates a “fork-join” scope `s` and invokes the closure with a reference to `s`. This closure can then spawn asynchronous tasks into `s`. Those tasks may run asynchronously with respect to the closure; they may themselves spawn additional tasks into `s`. When the closure returns, it will block until all tasks that have been spawned into `s` complete."],["in_place_scope_fifo","Creates a “fork-join” scope `s` with FIFO order, and invokes the closure with a reference to `s`. This closure can then spawn asynchronous tasks into `s`. Those tasks may run asynchronously with respect to the closure; they may themselves spawn additional tasks into `s`. When the closure returns, it will block until all tasks that have been spawned into `s` complete."],["join","Takes two closures and potentially runs them in parallel. It returns a pair of the results from those closures."],["join_context","Identical to `join`, except that the closures have a parameter that provides context for the way the closure has been called, especially indicating whether they’re executing on a different thread than where `join_context` was called.  This will occur if the second job is stolen by a different thread, or if `join_context` was called from outside the thread pool to begin with."],["max_num_threads","Returns the maximum number of threads that Rayon supports in a single thread-pool."],["scope","Creates a “fork-join” scope `s` and invokes the closure with a reference to `s`. This closure can then spawn asynchronous tasks into `s`. Those tasks may run asynchronously with respect to the closure; they may themselves spawn additional tasks into `s`. When the closure returns, it will block until all tasks that have been spawned into `s` complete."],["scope_fifo","Creates a “fork-join” scope `s` with FIFO order, and invokes the closure with a reference to `s`. This closure can then spawn asynchronous tasks into `s`. Those tasks may run asynchronously with respect to the closure; they may themselves spawn additional tasks into `s`. When the closure returns, it will block until all tasks that have been spawned into `s` complete."],["spawn","Fires off a task into the Rayon threadpool in the “static” or “global” scope.  Just like a standard thread, this task is not tied to the current stack frame, and hence it cannot hold any references other than those with `'static` lifetime. If you want to spawn a task that references stack data, use the `scope()` function to create a scope."],["spawn_fifo","Fires off a task into the Rayon threadpool in the “static” or “global” scope.  Just like a standard thread, this task is not tied to the current stack frame, and hence it cannot hold any references other than those with `'static` lifetime. If you want to spawn a task that references stack data, use the `scope_fifo()` function to create a scope."]],"mod":[["array","Parallel iterator types for arrays (`[T; N]`)"],["collections","Parallel iterator types for standard collections"],["iter","Traits for writing parallel programs using an iterator-style interface"],["option","Parallel iterator types for options"],["prelude","The rayon prelude imports the various `ParallelIterator` traits. The intention is that one can include `use rayon::prelude::*` and have easy access to the various traits and methods you will need."],["range","Parallel iterator types for ranges, the type for values created by `a..b` expressions"],["range_inclusive","Parallel iterator types for inclusive ranges, the type for values created by `a..=b` expressions"],["result","Parallel iterator types for results"],["slice","Parallel iterator types for slices"],["str","Parallel iterator types for strings"],["string","This module contains the parallel iterator types for owned strings (`String`). You will rarely need to interact with it directly unless you have need to name one of the iterator types."],["vec","Parallel iterator types for vectors (`Vec<T>`)"]],"struct":[["FnContext","Provides the calling context to a closure called by `join_context`."],["Scope","Represents a fork-join scope which can be used to spawn any number of tasks. See `scope()` for more information."],["ScopeFifo","Represents a fork-join scope which can be used to spawn any number of tasks. Those spawned from the same thread are prioritized in relative FIFO order. See `scope_fifo()` for more information."],["ThreadBuilder","Thread builder used for customization via `ThreadPoolBuilder::spawn_handler`."],["ThreadPool","Represents a user created thread-pool."],["ThreadPoolBuildError","Error when initializing a thread pool."],["ThreadPoolBuilder","Used to create a new `ThreadPool` or to configure the global rayon thread pool."]]};