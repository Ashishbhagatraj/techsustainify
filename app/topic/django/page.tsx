import Link from "next/link";

export const djangoTopicsData = [
  {
    heading: "Django Tutorials",
    topics: [
      { label: "Django Home", path: "/django/django-home" },
      { label: "Django Intro", path: "/django/django-intro" },
      { label: "Django Installation", path: "/django/django-installation" },
      { label: "Django Environment Setup", path: "/django/django-environment-setup" },
      { label: "Django Project Structure", path: "/django/django-project-structure" },
      { label: "Django App", path: "/django/django-app" },
      { label: "Django Views", path: "/django/django-views" },
      { label: "Django URLs", path: "/django/django-urls" },
      { label: "Django Templates", path: "/django/django-templates" },
      { label: "Django Static Files", path: "/django/django-static-files" },
      { label: "Django Models", path: "/django/django-models" },
      { label: "Django Admin Panel", path: "/django/django-admin-panel" },
      { label: "Django Migrations", path: "/django/django-migrations" },
      { label: "Django Shell", path: "/django/django-shell" },
    ],
  },

  {
    heading: "Django Models & Database",
    topics: [
      { label: "Django ORM", path: "/django/django-orm" },
      { label: "Django Fields", path: "/django/django-fields" },
      { label: "Django QuerySet", path: "/django/django-queryset" },
      { label: "Django CRUD Operations", path: "/django/django-crud-operations" },
      { label: "Django Relationships", path: "/django/django-relationships" },
      { label: "Django ForeignKey", path: "/django/django-foreignkey" },
      { label: "Django ManyToManyField", path: "/django/django-manytomanyfield" },
      { label: "Django OneToOneField", path: "/django/django-onetoonefield" },
    ],
  },

  {
    heading: "Django Forms",
    topics: [
      { label: "Django Forms", path: "/django/django-forms" },
      { label: "Django ModelForm", path: "/django/django-modelform" },
      { label: "Django Form Validation", path: "/django/django-form-validation" },
      { label: "Django Widgets", path: "/django/django-widgets" },
      { label: "Django CSRF Protection", path: "/django/django-csrf-protection" },
    ],
  },

  {
    heading: "Django Authentication",
    topics: [
      { label: "Django Authentication", path: "/django/django-authentication" },
      { label: "Django Login", path: "/django/django-login" },
      { label: "Django Logout", path: "/django/django-logout" },
      { label: "Django Registration", path: "/django/django-registration" },
      { label: "Django Permissions", path: "/django/django-permissions" },
      { label: "Django User Model", path: "/django/django-user-model" },
    ],
  },

  {
    heading: "Django Advanced",
    topics: [
      { label: "Django Class Based Views", path: "/django/django-class-based-views" },
      { label: "Django Function Based Views", path: "/django/django-function-based-views" },
      { label: "Django Middleware", path: "/django/django-middleware" },
      { label: "Django Signals", path: "/django/django-signals" },
      { label: "Django Sessions", path: "/django/django-sessions" },
      { label: "Django Cookies", path: "/django/django-cookies" },
      { label: "Django Caching", path: "/django/django-caching" },
      { label: "Django Pagination", path: "/django/django-pagination" },
      { label: "Django File Upload", path: "/django/django-file-upload" },
    ],
  },

  {
    heading: "Django REST Framework",
    topics: [
      { label: "Django REST Framework Intro", path: "/django/django-rest-framework-intro" },
      { label: "Django Serializers", path: "/django/django-serializers" },
      { label: "Django API Views", path: "/django/django-api-views" },
      { label: "Django ViewSets", path: "/django/django-viewsets" },
      { label: "Django Routers", path: "/django/django-routers" },
      { label: "Django API Authentication", path: "/django/django-api-authentication" },
      { label: "Django JWT Authentication", path: "/django/django-jwt-authentication" },
    ],
  },

  {
    heading: "Django Deployment",
    topics: [
      { label: "Django Deployment", path: "/django/django-deployment" },
      { label: "Deploy Django on VPS", path: "/django/deploy-django-on-vps" },
      { label: "Deploy Django on Heroku", path: "/django/deploy-django-on-heroku" },
      { label: "Deploy Django on Render", path: "/django/deploy-django-on-render" },
      { label: "Django with PostgreSQL", path: "/django/django-with-postgresql" },
      { label: "Django Environment Variables", path: "/django/django-environment-variables" },
    ],
  },

  {
    heading: "Django Examples & Practice",
    topics: [
      { label: "Django Examples", path: "/django/django-examples" },
      { label: "Django Exercises", path: "/django/django-exercises" },
      { label: "Django Mini Projects", path: "/django/django-mini-projects" },
      { label: "Django Blog Project", path: "/django/django-blog-project" },
      { label: "Django CRUD Project", path: "/django/django-crud-project" },
      { label: "Django Interview Questions", path: "/django/django-interview-questions" },
    ],
  },

  {
    heading: "Django MCQ",
    topics: [
      { label: "Django MCQ", path: "/django/django-mcq" },
    ],
  },
];

const DjangoTopics = () => {
  return (
    <div>
      {djangoTopicsData.map((section) => (
        <div key={section.heading}>
          <h1>{section.heading}</h1>

          {section.topics.map((topic) => (
            <Link href={topic.path} key={topic.path}>
              <h3>{topic.label}</h3>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DjangoTopics;