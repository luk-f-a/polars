try:
    from polars.polars import (
        ArrowError,
        ComputeError,
        DuplicateError,
        NoDataError,
        NotFoundError,
        PanicException,
        SchemaError,
        ShapeError,
    )
except ImportError:
    # They are only redefined for documentation purposes
    # when there is no binary yet

    class ArrowError(Exception):  # type: ignore[no-redef]
        """Exception raised the underlying Arrow library encounters an error."""

    class ComputeError(Exception):  # type: ignore[no-redef]
        """Exception raised when polars could not finish the computation."""

    class NoDataError(Exception):  # type: ignore[no-redef]
        """Exception raised when an operation can not be performed on an empty data structure."""  # noqa: E501

    class NotFoundError(Exception):  # type: ignore[no-redef]
        """Exception raised when a specified column is not found."""

    class SchemaError(Exception):  # type: ignore[no-redef]
        """Exception raised when trying to combine data structures with mismatched schemas."""  # noqa: E501

    class ShapeError(Exception):  # type: ignore[no-redef]
        """Exception raised when trying to combine data structures with incompatible shapes."""  # noqa: E501

    class DuplicateError(Exception):  # type: ignore[no-redef]
        """Exception raised when a column name is duplicated."""

    class PanicException(Exception):  # type: ignore[no-redef]
        """Exception raised when an unexpected state causes a panic in the underlying Rust library."""  # noqa: E501


__all__ = [
    "ArrowError",
    "ComputeError",
    "NoDataError",
    "NotFoundError",
    "SchemaError",
    "ShapeError",
    "DuplicateError",
    "PanicException",
]