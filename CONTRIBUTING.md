# Contributing to Cadet Place

Thank you for your interest in contributing to Cadet Place! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/cadet-place.git
   cd cadet-place
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🛠️ Development Workflow

### Branch Naming
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring

### Commit Messages
Follow conventional commit format:
- `feat: add new quiz component`
- `fix: resolve message timestamp issue`
- `docs: update README installation steps`
- `style: improve button hover states`

### Code Style
- Use TypeScript for all new code
- Follow existing ESLint configuration
- Use Tailwind CSS for styling
- Maintain component modularity
- Add proper TypeScript types

### Testing
- Test your changes thoroughly
- Ensure responsive design works on mobile
- Verify accessibility standards
- Check performance impact

## 📝 Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the code style guidelines
3. **Test thoroughly** across different devices and browsers
4. **Update documentation** if needed
5. **Submit a pull request** with:
   - Clear description of changes
   - Screenshots for UI changes
   - Reference to any related issues

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested with screen readers
- [ ] Performance impact assessed

## Screenshots
(If applicable)
```

## 🎯 Areas for Contribution

### High Priority
- **Accessibility improvements**: ARIA labels, keyboard navigation
- **Performance optimization**: Bundle size, loading times
- **Mobile experience**: Touch interactions, responsive design
- **Internationalization**: Multi-language support

### Features
- **New lesson types**: Video lessons, interactive exercises
- **Enhanced gamification**: Badges, leaderboards, challenges
- **Social features**: Sharing progress, collaborative learning
- **Analytics**: Learning progress tracking, insights

### Bug Fixes
- Cross-browser compatibility issues
- Mobile-specific bugs
- Performance bottlenecks
- Accessibility violations

## 🔧 Technical Guidelines

### Component Structure
```typescript
interface ComponentProps {
  // Define all props with proper types
}

export const Component: React.FC<ComponentProps> = ({
  prop1,
  prop2
}) => {
  // Component logic
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
};
```

### State Management
- Use React hooks for local state
- Keep state close to where it's used
- Use TypeScript interfaces for complex state

### Styling Guidelines
- Use Tailwind CSS utility classes
- Maintain consistent spacing (4px grid)
- Follow the existing color scheme
- Ensure responsive design

### File Organization
- One component per file
- Use descriptive file names
- Group related components in folders
- Export components from index files

## 🐛 Reporting Issues

### Bug Reports
Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots or videos if helpful

### Feature Requests
Include:
- Clear description of the feature
- Use case and benefits
- Mockups or examples if available
- Implementation suggestions

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/)

## 🤝 Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Provide constructive feedback

## 📞 Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out to maintainers
- Check existing documentation

Thank you for contributing to Cadet Place! 🎉