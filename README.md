Exercise 2: Custom Git Hooks for Quality Control

commit-msg hook:
#!/bin/sh

commit_msg_file=$1
commit_msg=$(head -n1 "$commit_msg_file")

# Simple extended regex pattern (no backslashes)
pattern="^PROJ-[0-9]+: .+"

if ! echo "$commit_msg" | grep -qE "$pattern"; then
  echo "Invalid commit message format!"
  echo "Expected: PROJ-123: Description"
  exit 1
fi

echo "Commit message format is valid."


pre-push hook:
#!/bin/sh

echo "Running tests before push ...."

npm test

if [ $? -ne 0 ]; then
  echo "Tests failed. Push aborted."
  exit 1
fi

echo "Tests passed. Proceeding with push."